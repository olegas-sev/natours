const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const APIFeatures = require('./../utils/apiFeatures')

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id)

    if (!doc) {
      return next(new AppError('No document found with specified id', 404))
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  })
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!doc) {
      return next(new AppError('No document found with specified id', 404))
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    })
  })

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    })
  })

exports.getOne = (Model, options) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id)
    if (options) query.populate(options)
    // .populate make a query for specified ID's in field guides and returns us Users then returns that query
    const doc = await query

    if (!doc) {
      return next(new AppError('No document found with specified id', 404))
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    })
  })

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (HACK)
    let filter = {}
    if (req.params.tourId) filter = { tour: req.params.tourId }

    // EXECUTE a query
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()

    // Query details
    // const docs = await features.query.explain()

    const docs = await features.query

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        data: {
          docs,
        },
      },
    })
  })

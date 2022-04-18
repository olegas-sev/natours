const express = require('express')
const router = express.Router()
const tourController = require('../controllers/tourController')
const authController = require('../controllers/authController')
const reviewRouter = require('../routes/reviewRoutes')

router.use('/:tourId/reviews', reviewRouter)

// Alias
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours)

router.route('/tour-stats').get(tourController.getTourStats)

router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan
  )

// /tour-within/200/center/-40,45/unit/km
// better than query
// /tour-within?distance=200&center=-40,45&unit=km
router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin)

router.route('/:distances/:latlng/unit/:unit').get(tourController.getDistances)

// Routes
router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  )

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  )

module.exports = router

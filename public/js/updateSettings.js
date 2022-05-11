import axios from 'axios';
import { showAlert } from './alert';

// type is 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const action = type === 'password' ? 'updateMyPassword' : 'updateMe';

    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:3000/api/v1/users/${action}`,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

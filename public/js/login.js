import axios from 'axios';
import { showAlert } from './alert';
import { executeIn } from './utils';

export const login = async ({ email, password }) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      executeIn(1.5, location.assign('/'));
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/users/logout',
    });
    if (res.data.status == 'success') {
      showAlert('ongoing', 'Logging you out..');
      location.reload();
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};

import { Api } from './api/axios-config';

interface IAuth {
  access_token: string;
}

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api().post('auth/login', {email, password});

    if (data) {
      return data;
    }
    return new Error('Erro no login');
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string }).message || 'Erro no login.');
  }
};

export const LoginService = {
  auth,
};

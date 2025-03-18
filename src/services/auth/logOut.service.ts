import useToken from '../../store/useToken';

export default async function logOut() {
    useToken.getState().setToken(null);
};
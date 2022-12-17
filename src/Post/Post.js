import axios from 'axios';

export const getPosts = async () => {
    const res = await axios.get(`https://surat.upanastudio.com/surat`);
    return res.data;
};

export const getPost = async (id) => {
    const res = await axios.get(`https://surat.upanastudio.com/surat/${id}`);
    return res.data;
};
export const deletePost = async (id) => {
    const res = await axios.delete(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json/${id}`);
    return res.status;
};
export const createPost = async (data) => {
    const res = await axios.post(`https://surat.upanastudio.com/surat`, data);
    return res.status;
};

import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs2 = () => {
    const backend = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const handleCreateBlog = () => {
        navigate('/admin-dashboard/createblog');
    };

    const [blogs, setBlogs] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [currentBlogId, setCurrentBlogId] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch blog data from API when component mounts
    const fetchBlogs = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${backend}/api/v1/admin/get-blogs`)
            // console.log(response.data.message);
            setBlogs(response.data.message)
            setLoading(true)
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const confirmDelete = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${backend}/api/v1/admin/delete-single-blog`, { id: currentBlogId })
            setLoading(false);
            fetchBlogs()
            setCurrentBlogId(null);
            setShowDeleteDialog(false);
        } catch (error) {
            console.error('Error deleting blog:', error);
            setLoading(false);
        }
    };

    const cancelDelete = () => {
        setCurrentBlogId(null)
        setShowDeleteDialog(false);
    };

    return (
        <div className='w-full h-auto flex flex-col pt-10 md:pt-16 xl:pt-20'>
            <div className='w-full h-auto flex flex-col justify-center items-center mb-10 gap-7'>
                <span className='font-dmSans text-3xl font-semibold text-[#0159A5] md:text-4xl xl:text-5xl'>Blogs</span>
                <span onClick={handleCreateBlog} className='w-auto px-5 py-2 border text-blue-500 rounded-md active:bg-blue-500 active:text-white font-medium border-blue-500 md:hover:bg-blue-500 md:hover:text-white cursor-pointer'>
                    Create A New Blog
                </span>
            </div>
            <div className='w-full h-auto flex flex-col xl:px-2 mb-10'>
                <table className='w-full h-auto border-collapse border border-gray-300 font-dmSans'>
                    <thead className='bg-[#0159A5] text-white'>
                        <tr>
                            <th className='border min-w-60 border-gray-300 p-2 text-left'>Id</th>
                            <th className='border min-w-60 border-gray-300 p-2 text-left'>Title</th>
                            <th className='border min-w-60 border-gray-300 p-2 text-left'>Content</th>
                            <th className='border min-w-32 border-gray-300 p-2 text-left'>Category</th>
                            <th className='border min-w-32 border-gray-300 p-2 text-left'>Tag</th>
                            <th className='border min-w-16 border-gray-300 p-2 text-left'>View</th>
                            <th className='border min-w-16 border-gray-300 p-2 text-left'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item) => (
                            <tr key={item._id}>
                                <td className='p-2'>{item._id}</td>
                                <td className='p-2'>{item.title.substring(0, 35)}{item.title.length <= 35 ? "" : "..."}</td>
                                <td className='p-2'>{item.content.substring(0, 70)}{item.content.length <= 70 ? "" : "..."}</td>
                                <td className='p-2'>{item.category}</td>
                                <td className='p-2'>{item.tag}</td>
                                <td className='p-2'>
                                    <NavLink to='/single-blog' state={{ item }} ><IoEyeSharp size={25} className='cursor-pointer mx-auto text-[#0159A5]' /></NavLink>
                                </td>
                                <td className='p-2'>
                                    <MdOutlineDeleteForever size={25} className='cursor-pointer mx-auto text-[#0159A5]' onClick={() => {
                                        setCurrentBlogId(item._id);
                                        setShowDeleteDialog(true);
                                    }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showDeleteDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                        <div className="border-b px-6 py-4">
                            <h5 className="text-xl font-semibold text-gray-800">Confirm Deletion</h5>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
                                onClick={cancelDelete}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-600 text-sm">
                                Are you sure you want to <span className="text-red-500 font-bold">DELETE</span> this blog? <br />
                                This action is <span className="text-red-500 font-bold">irreversible</span>.
                            </p>
                        </div>
                        <div className="flex justify-end px-6 py-4 border-t">
                            <button
                                type="button"
                                className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-lg px-4 py-2 mr-2"
                                onClick={cancelDelete}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2"
                                onClick={confirmDelete}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blogs2;
import { Button, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function DashProfile() {
    const currentUser = useSelector(state => state.user.currentUser);

    if (!currentUser || !currentUser.ProfilePicture) {
        return <div>Loading...</div>; // Or any other fallback UI
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Implement logic to update profile
    };

    const handleDeleteAccount = () => {
        // Implement logic to delete account
    };

    const handleSignOut = () => {
        // Implement logic to sign out
    };

    return (
        <div className='my-7 max-w-md mx-auto p-20 bg-white rounded-lg shadow-lg'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <div className="w-32 h-32 flex self-center cursor-pointer shadow:md overflow-hidden rounded-full">
                    <img src={currentUser.ProfilePicture} alt="profile" className="rounded-full w-full h-full object-cover border-8 border-lightgray" />
                </div>
                <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username} className='rounded-md shadow-md w-full' />
                <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email} className='rounded-md shadow-md w-full' />
                <TextInput type='password' id='password' placeholder='Password' className='rounded-md shadow-md w-full' />
                <Button type='submit' gradientDuoTone='purpleToBlue' onClick={handleUpdateProfile} className='rounded-full'>
                  Update
                </Button>
                <div className='text-red-500 flex justify-between mt-5 text-sm font-semibold'>
                    <span className='cursor-pointer' onClick={handleDeleteAccount}>Delete Account</span>
                    <span className='cursor-pointer' onClick={handleSignOut}>Sign Out</span>
                </div>
            </form>
        </div>
    );
}

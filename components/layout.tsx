import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { login } from '../lib/store/slices/authSlice'
import profilePic from '../public/me.png'

export default function Layout({ children }: any) {
    const dispatch = useDispatch();
    const signInTEST = () => {
        dispatch(login({ username: "Airidc69", password: "Test69" }))
    }

    return (
        <div className="sidebar-layout--wrapper">
            <div className="sidebar-layout--sidebar">
                <div className="sidebar--logo"><svg width="69" height="37" viewBox="0 0 69 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37" height="37" rx="4" fill="#F8954D" />
                    <path d="M11.7575 11.4316V12.75H7.80242V24H6.17645V12.75H2.22137V11.4316H11.7575ZM13.4299 24V11.4316H18.7912C21.1818 11.4316 22.3771 12.4365 22.3771 14.4463C22.3771 16.0811 21.2082 17.291 18.8703 18.0762L23.1857 24H21.0412L17.0422 18.3486V17.2852C19.4445 16.9043 20.6457 15.9814 20.6457 14.5166C20.6457 13.3564 19.9777 12.7764 18.6418 12.7764H15.0559V24H13.4299ZM26.2644 11.4316V24H24.6384V11.4316H26.2644ZM35.1062 11.4316L29.446 17.3643L35.2292 24H32.9704L27.8464 17.9531V16.9688L33.0495 11.4316H35.1062ZM44.4275 14.7715C47.0525 14.7715 48.365 16.0693 48.365 18.665C48.365 19.0342 48.3386 19.4297 48.2859 19.8516H41.8084C41.8084 21.7383 42.9099 22.6816 45.113 22.6816C46.1619 22.6816 47.0935 22.5645 47.908 22.3301V23.6484C47.0935 23.8828 46.1033 24 44.9373 24C41.7673 24 40.1824 22.4268 40.1824 19.2803C40.1824 16.2744 41.5974 14.7715 44.4275 14.7715ZM41.8084 18.498H46.8005C46.7654 16.8809 45.9744 16.0723 44.4275 16.0723C42.7869 16.0723 41.9138 16.8809 41.8084 18.498ZM50.2835 24V14.7715H51.3821L51.6721 15.9492C52.4807 15.1641 53.4534 14.7715 54.5901 14.7715V16.125C53.4886 16.125 52.595 16.5146 51.9095 17.2939V24H50.2835ZM57.7566 14.7715V24H56.1307V14.7715H57.7566ZM57.7566 11.4316V12.9697H56.1307V11.4316H57.7566ZM60.22 23.5605V22.1543C61.304 22.5059 62.3997 22.6816 63.5071 22.6816C64.9779 22.6816 65.7132 22.2422 65.7132 21.3633C65.7132 20.543 65.2005 20.1328 64.1751 20.1328H62.8568C60.8646 20.1328 59.8685 19.2246 59.8685 17.4082C59.8685 15.6504 61.1488 14.7715 63.7093 14.7715C64.8109 14.7715 65.9036 14.918 66.9876 15.2109V16.6172C65.9036 16.2656 64.8109 16.0898 63.7093 16.0898C62.1741 16.0898 61.4066 16.5293 61.4066 17.4082C61.4066 18.2285 61.89 18.6387 62.8568 18.6387H64.1751C66.2845 18.6387 67.3392 19.5469 67.3392 21.3633C67.3392 23.1211 66.0618 24 63.5071 24C62.3997 24 61.304 23.8535 60.22 23.5605Z" fill="white" />
                </svg>
                </div>
                <div className="sidebar--profile-pic-container">
                    {/* <Image src={userData.user?.profilePicPath as any} alt="User profile picture" /> */}
                    <Image src={profilePic} className="sidebar--profile-image" alt="User profile picture" />
                </div>
                <h3>Vensku Airis</h3>
                <nav className="sidebar--nav">
                    <ul className="sidebar--nav--list">
                        <span className="sidebar--nav--list--item active">Dashboard</span>
                        <span className="sidebar--nav--list--item">Portoflios</span>
                        <span className="sidebar--nav--list--item">Expenses</span>
                        <span className="sidebar--nav--list--item">Settings</span>
                    </ul>
                </nav>
                <button onClick={signInTEST}>Log IN while testing</button>
            </div>
            {children}
        </div>
    )
}
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../lib/store/hooks";
import { AppConfigState, changeCurrentPage, selectAppConfig } from "../lib/store/slices/appConfigSlice";
import { authSlice, login } from "../lib/store/slices/authSlice";

export interface loginRefs {
    username?: HTMLInputElement | null,
    password?: HTMLInputElement | null,
}

export default function loginPage() {
    const dispatch = useDispatch();
    dispatch(changeCurrentPage({ currentPage: "Login" }))
    const { apiUrl, currentPage } = useAppSelector<AppConfigState>(selectAppConfig);
    const inputRefs = useRef<loginRefs>({});

    const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputRefs.current?.username?.value, inputRefs.current?.password?.value);
        let username = inputRefs.current['username']?.value;
        let password = inputRefs.current['password']?.value;
        if (username && password) {
            dispatch(login({ username: username, password: password }));
        }
    }
    return (
        <div className="auth-page__container">
            <Head>
                <title>[TRK] Trakeris - Sign in!</title>
                <meta name="description" content="Trakeris - Expense and Finance Tracker. Track your daily expenses and use rich reports to examine your spending habbits." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <form className="form" onSubmit={submitLogin}>
                <svg width="69" height="37" viewBox="0 0 69 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37" height="37" rx="4" fill="#F8954D" />
                    <path d="M11.7575 11.4316V12.75H7.80242V24H6.17645V12.75H2.22137V11.4316H11.7575ZM13.4299 24V11.4316H18.7912C21.1818 11.4316 22.3771 12.4365 22.3771 14.4463C22.3771 16.0811 21.2082 17.291 18.8703 18.0762L23.1857 24H21.0412L17.0422 18.3486V17.2852C19.4445 16.9043 20.6457 15.9814 20.6457 14.5166C20.6457 13.3564 19.9777 12.7764 18.6418 12.7764H15.0559V24H13.4299ZM26.2644 11.4316V24H24.6384V11.4316H26.2644ZM35.1062 11.4316L29.446 17.3643L35.2292 24H32.9704L27.8464 17.9531V16.9688L33.0495 11.4316H35.1062ZM44.4275 14.7715C47.0525 14.7715 48.365 16.0693 48.365 18.665C48.365 19.0342 48.3386 19.4297 48.2859 19.8516H41.8084C41.8084 21.7383 42.9099 22.6816 45.113 22.6816C46.1619 22.6816 47.0935 22.5645 47.908 22.3301V23.6484C47.0935 23.8828 46.1033 24 44.9373 24C41.7673 24 40.1824 22.4268 40.1824 19.2803C40.1824 16.2744 41.5974 14.7715 44.4275 14.7715ZM41.8084 18.498H46.8005C46.7654 16.8809 45.9744 16.0723 44.4275 16.0723C42.7869 16.0723 41.9138 16.8809 41.8084 18.498ZM50.2835 24V14.7715H51.3821L51.6721 15.9492C52.4807 15.1641 53.4534 14.7715 54.5901 14.7715V16.125C53.4886 16.125 52.595 16.5146 51.9095 17.2939V24H50.2835ZM57.7566 14.7715V24H56.1307V14.7715H57.7566ZM57.7566 11.4316V12.9697H56.1307V11.4316H57.7566ZM60.22 23.5605V22.1543C61.304 22.5059 62.3997 22.6816 63.5071 22.6816C64.9779 22.6816 65.7132 22.2422 65.7132 21.3633C65.7132 20.543 65.2005 20.1328 64.1751 20.1328H62.8568C60.8646 20.1328 59.8685 19.2246 59.8685 17.4082C59.8685 15.6504 61.1488 14.7715 63.7093 14.7715C64.8109 14.7715 65.9036 14.918 66.9876 15.2109V16.6172C65.9036 16.2656 64.8109 16.0898 63.7093 16.0898C62.1741 16.0898 61.4066 16.5293 61.4066 17.4082C61.4066 18.2285 61.89 18.6387 62.8568 18.6387H64.1751C66.2845 18.6387 67.3392 19.5469 67.3392 21.3633C67.3392 23.1211 66.0618 24 63.5071 24C62.3997 24 61.304 23.8535 60.22 23.5605Z" fill="white" />
                </svg>

                <p>Active page: {currentPage}</p>
                <p>API URL: {apiUrl}</p>

                <div className="form__control__row">
                    <label htmlFor="username">Username</label>
                    <input ref={el => inputRefs.current['username'] = el} type="text" name="username" id="username" className="form__control__input" />
                </div>
                <div className="form__control__row">
                    <label htmlFor="password">Password</label>
                    <input ref={el => inputRefs.current['password'] = el} type="password" name="password" id="password" className="form__control__input" />
                </div>
                <div className="form__control__row">
                    <button type="submit">Sign in</button>
                    <p>Forgor your password? <Link href="/reset"><a className="form__link">Click here</a></Link></p>
                    <p>Don't have an account yet? <Link href="/signup"><a className="form__link">Sign up</a></Link></p>
                    <Link href="/"><a className="form__link">Back to homepage</a></Link>
                </div>
            </form>
        </div>
    )
}
// src/pages/Login.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // 👈🏻 يجب استيراد Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import loginImage from './c334bcc9-ad42-4b1c-af87-1f2975f0b9d4.png';

// ⚠️ ستحتاجين إلى التأكد من أن مسارات الـ CSS هذه صحيحة بالنسبة لـ /pages/
import './AuthPage.css';
import './LoginForm.css'; // تنسيقات الهيكل المشترك
// قد تحتاجين لـ /components/Login/LoginForm.css (حسب هيكلة الـ CSS)
// إذا كان التنسيق مُدمجاً في AuthPage.css فلا بأس.

// ----------------------------------------------------------------------
// 1. مكون LoginForm المُدمج
// ----------------------------------------------------------------------
const LoginForm = () => {
    return (
        <div className="auth-form-card">
            <h2 className="auth-title">Welcome Back!</h2>
            
            {/* أزرار تسجيل الدخول عبر الخدمات الخارجية */}
            <div className="social-login-buttons">
                <button className="btn btn-social btn-google">
                    <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                </button>
                <button className="btn btn-social btn-microsoft">
                    <FontAwesomeIcon icon={faMicrosoft} /> Continue with Microsoft
                </button>
            </div>

            <div className="divider">Or continue with email</div>

            {/* Form تسجيل الدخول عبر البريد الإلكتروني */}
            <form className="login-form">
                <div className="input-group">
                    <input type="email" placeholder="Email Address" required />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" required />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </div>

                <Link to="/forgot" className="forgot-password">Forgot Password?</Link> {/* استخدام Link */}
                
                <button type="submit" className="btn btn-primary login-button">Login</button>
            </form>

            {/* ⚠️ مهم: استخدام Link للانتقال إلى صفحة التسجيل */}
            <p className="signup-link">Don't have account? <Link to="/Signup">Sign up</Link></p>
        </div>

    );
};

// ----------------------------------------------------------------------
// 2. المكون الرئيسي لصفحة تسجيل الدخول (Login)
// ----------------------------------------------------------------------
// ⚠️ ملاحظة: قمت بحذف استيراد وعرض Navbar و Footer من هذا الملف
// لأنك عرضتهما بالفعل في ملف App.js لتجنب مشكلة التبادل الحلقي!
// إذا كنت مصرة على عرضهما هنا، يجب أن تتأكدي من صحة مسارات استيرادهما.

const Login = () => {
    return (
        <div className="auth-page-wrapper">
            {/* Image Section (القسم الأيسر) */}
            <div className="auth-image-section">
                <div className="image-placeholder login-image-bg">
                  <img src={loginImage}
                   alt="doctor" />
                </div>
            </div>

            {/* Form Section (القسم الأيمن) */}
            <div className="auth-form-section">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
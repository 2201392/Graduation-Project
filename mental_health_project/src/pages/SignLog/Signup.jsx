// src/pages/Signup.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // 👈🏻 يجب استيراد Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import signupImage from './c334bcc9-ad42-4b1c-af87-1f2975f0b9d4.png';

// ⚠️ ستحتاجين إلى التأكد من أن مسارات الـ CSS هذه صحيحة بالنسبة لـ /pages/
import './AuthPage.css'; 
import './SignupForm.css';// تنسيقات الهيكل المشترك
// قد تحتاجين لـ /components/Signup/SignupForm.css (حسب هيكلة الـ CSS)
// إذا كان التنسيق مُدمجاً في AuthPage.css فلا بأس.

// ----------------------------------------------------------------------
// 1. مكون SignupForm المُدمج
// ----------------------------------------------------------------------
const SignupForm = () => {
    return (
    
        <div className="auth-form-card signup-card">
            <h2 className="auth-title">Begin your journey to peace of mind with your doctor and AI.</h2>
            
            {/* أزرار تسجيل الدخول عبر الخدمات الخارجية */}
            <div className="social-login-buttons">
                <button className="btn btn-social btn-google">
                    <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
                </button>
                <button className="btn btn-social btn-microsoft">
                    <FontAwesomeIcon icon={faMicrosoft} /> Sign up with Microsoft
                </button>
            </div>

            <div className="divider">Or sign up with email</div>

            {/* Form تسجيل الاشتراك */}
            <form className="signup-form">
                
                {/* اختيار النوع */}
                <div className="radio-group-row">
                    <span className="radio-label">I am a:</span>
                    <div className="radio-option">
                        <input type="radio" id="patient" name="userType" value="patient" defaultChecked />
                        <label htmlFor="patient">Patient</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" id="doctor" name="userType" value="doctor" />
                        <label htmlFor="doctor">Doctor</label>
                    </div>
                </div>

                {/* الاسم الأول والأخير */}
                <div className="input-group-row">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                
                <div className="input-group">
                    <input type="email" placeholder="Email Address" required />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="input-group">
                    <input type="tel" placeholder="Phone Number" required />
                    <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>

                {/* الدولة والمدينة */}
                <div className="input-group-row">
                    <div className="input-group select-group">
                        <select required>
                            <option value="">Select Country</option>
                            <option>Egypt</option>
                            <option>USA</option>
                        </select>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="City" required />
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                    </div>
                </div>

                {/* الجنس وتاريخ الميلاد */}
                <div className="gender-birth-row">
                    <div className="radio-group-row">
                        <span className="radio-label">Gender:</span>
                        <div className="radio-option">
                            <input type="radio" id="male" name="gender" value="male" defaultChecked />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="input-group date-input">
                        <input type="text" placeholder="mm/dd/yyyy" required />
                        <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
                    </div>
                </div>

                {/* كلمة المرور */}
                <div className="input-group">
                    <input type="password" placeholder="Password" required />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Confirm Password" required />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </div>
                
                <button type="submit" className="btn btn-primary signup-button">Sign Up</button>
            </form>

            {/* ⚠️ مهم: استخدام Link للانتقال إلى صفحة تسجيل الدخول */}
            <p className="login-link">Already have an account? <Link to="/Login">Login</Link></p>
        </div>

    );
};

// ----------------------------------------------------------------------
// 2. المكون الرئيسي لصفحة التسجيل (Signup)
// ----------------------------------------------------------------------
// ⚠️ ملاحظة: قمت بحذف استيراد وعرض Navbar و Footer من هذا الملف
// لنفس السبب في ملف Login.jsx

const Signup = () => {
    return (
        <div className="auth-page-wrapper">
            {/* Image Section (القسم الأيسر) */}
            <div className="auth-image-section">
                <div className="image-placeholder signup-image-bg">
                    <img src={signupImage}
                         alt="doctor" />
                </div>
            </div>

            {/* Form Section (القسم الأيمن) */}
            <div className="auth-form-section">
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;
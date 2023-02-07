import React from 'react';
import s from'./ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://getwallpapers.com/wallpaper/full/8/9/2/29270.jpg" alt=""/></div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
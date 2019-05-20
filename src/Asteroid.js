import React from 'react';
// https://codepen.io/Mark_Bowley/pen/xEbuI
function Asteroid(props) {
    return (
        <>
            <img src={"/images/" + props.imgSrc} alt="background projectile" className="projectiles projectile-1" />
            <img src={"/images/" + props.imgSrc} alt="background projectile" className="projectiles projectile-2" />
            {/* <img src={"/images/" + props.imgSrc} alt="background projectile" className="projectiles projectile-3" /> */}
            {/* <img src={"/images/" + props.imgSrc} alt="background projectile" className="projectiles projectile-4" /> */}

        </>
    )
}

export default Asteroid;
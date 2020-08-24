import React from "react";

const UtilityNav = () => {
    return(
        <div id="utlity-navigation" className="bg-gray-100 py-3">
            <div className="container">
                <ul className="flex justify-around md:justify-end list-none md:ml-12">
                    <li className="text-small font-heading font-medium md:mr-12"><a className="text-gray-700 no-underline" href="tel:+1-619-299-9888">Hillcrest: <span className="italic">(619) 299-9888</span></a></li>
                    <li className="text-small font-heading font-medium"><a className="text-gray-700 no-underline" href="tel:+1-760-729-9888">Carlsbad: <span className="italic">(760) 729-9888</span></a></li>
                </ul>
            </div>
        </div>
    );
}
export default UtilityNav;
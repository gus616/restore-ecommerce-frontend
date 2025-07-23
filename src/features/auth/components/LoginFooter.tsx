import React from 'react'

const LoginFooter = () => {

    const links = [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Help", url: "/help" }
    ];

    return (
        <div className="max-w-md mx-auto mt-6 p-4">
            <div className="flex items-start justify-center gap-5">
                {
                    links.map((link, index) => (
                        <span key={index} className="text-[#2162a1] text-sm cursor-pointer">{link.name}</span>
                    ))
                }
            </div>

            <div className="flex items-start justify-center gap-5 mt-4">
                <p className="text-sm text-center">
                    © 1989 - {new Date().getFullYear()} Amazon't E-commerce Clone Project. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default LoginFooter
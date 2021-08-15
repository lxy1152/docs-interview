import React from "react"

export default function Layout({children, alt}) {
    return <img alt={alt} src={children}
                style={{
                    marginLeft: "15%",
                    marginRight: "15%",
                    width: "70%"
                }}/>;
}

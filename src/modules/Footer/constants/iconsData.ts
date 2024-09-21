
import googlePlay from "./../../../assets/footer_icons/GooglePlay.png";
import appStore from "./../../../assets/footer_icons/AppStore.png";
import facebook from "./../../../assets/footer_icons/Icon-Facebook.svg";
import twitter from "./../../../assets/footer_icons/Icon-Twitter.svg";
import instagram from "./../../../assets/footer_icons/icon-instagram.svg";
import linkedin from "./../../../assets/footer_icons/Icon-Linkedin.svg";


export const accountLinks = [
{  
    page:"My Account",
    to:"/" 
},
{  
    page:"Login/Register",
    to:"/register" 
},

{  
    page:"Cart",
    to:"/cart" 
},

{  
    page:"WhiteList",
    to:"/whitelist" 
},
{  
    page:"Shop",
    to:"/shop" 
},
]


export const socialLinks = [
    {
        src: facebook,
        to: "https://www.facebook.com/",
        alt: "facebook"
    },

    {
        src: twitter,
        to: "https://www.twitter.com/",
        alt: "twitter"
    },

    {
        src: instagram,
        to: "https://www.instagram.com/",
        alt: "instagram"
    },

    {
        src: linkedin,
        to: "https://www.linkedin.com/",
        alt: "linkedin"
    },
]

export const appStores = [
    {
        src: googlePlay,
        to: "https://play.google.com/",
        alt: "googlePlay"
    },
    {
        src: appStore,
        to: "https://www.apple.com/de/app-store/",
        alt: "appStore"
    }
]
export const stores = [appStore, googlePlay]
import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import k1 from "./kampanyalar/1.webp";
import k2 from "./kampanyalar/2.webp";
import k3 from "./kampanyalar/3.webp";
import k4 from "./kampanyalar/4.webp";





import KampComp from "./KlinikComp.js";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",zIndex: "1000"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
               <KampComp
                    kampanyaResim={k1}
                    kampanyaAd="https://wa.me/+905013362125?text=Merhaba%2C%20Bayanlar%20i%C3%A7in%20T%C3%BCm%20Bacak%2C%20Koltukalt%C4%B1%20ve%20Genital%20B%C3%B6lge%20Lazer%20Epilasyon%20(10%20Seans%20800%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905013362125?text=Merhaba%2C%20Bayanlar%20i%C3%A7in%20T%C3%BCm%20V%C3%BCcut%20Lazer%20Epilasyon%20(10%20Seans%201500%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905013362125?text=Merhaba%2C%20Erkekler%20i%C3%A7in%20T%C3%BCm%20V%C3%BCcut%20Lazer%20Epilasyon%20(10%20Seans%202000%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k4}
                    kampanyaAd="https://wa.me/+905013362125?text=Merhaba%2C%20Avantajl%C4%B1%20Paket%2010%20Seans%20Epilasyon%20(Koltukalt%C4%B1%2C%20T%C3%BCm%20Bacak%20ve%20Genital%20B%C3%B6lge)%2C%205%20Seans%20Cilt%20Bak%C4%B1m%C4%B1%20ve%205%20Seans%20B%C3%B6lgesel%20%C4%B0ncelme%20(1500%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>    
    )
}


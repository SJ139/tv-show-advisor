import s from "./style.module.css"
import { TVShowAPI } from "./api/tv-show"
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./api/config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import LogoImg from "./assets/images/logo.png"
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";


TVShowAPI.fetchPopulars();

export function App(){

    const[currentTVShow, setCurrentTVShow] =useState();

    async function fetchPopulars(){
        const popularTVShowList = await TVShowAPI.fetchPopulars();
        if(popularTVShowList.length > 1) {
            setCurrentTVShow(popularTVShowList[0]);
        }
    }

    useEffect(()=>{
       fetchPopulars(); 
    }, []);

    return (
    <div className={s.main_container}
        style={{background: currentTVShow
        ? `linear-gradient(rgba(0,0,0,0.55), 
        rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
        : "black",
    }}>
        <div className={s.header}>
            < div className="row">
            <div className="col-4">
                <Logo img={LogoImg} title="WatoWatch" subtitle="Find a show you make like" />

            </div>
            <div className="col-md-12 col-lg-4">
                <input style={{width: "100%"}} type="text"/>
            </div>
        </div>  
    </div>
         
         <div className={s.tv_show_details}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
             
        
        <div className={s.recommended_tv_shows}>
            <TVShowListItem tvShow={currentTVShow}/>
        </div>
        </div>
    
    );
}
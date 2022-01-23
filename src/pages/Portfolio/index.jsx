import { Hidden, ImageList } from '@mui/material';
import { useMemo } from 'react'
import ImageCard from '../../components/ImageCard';
import classNames from 'classnames';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';

import seraphImage from '../../assets/images/portfolio/mobile/image-seraph.jpg'
import eeboxImage from '../../assets/images/portfolio/mobile/image-eebox.jpg'
import federalImage from '../../assets/images/portfolio/mobile/image-federal.jpg'
import delsolImage from '../../assets/images/portfolio/mobile/image-del-sol.jpg'
import prototypeImage from '../../assets/images/portfolio/mobile/image-prototype.jpg'
import towerImage from '../../assets/images/portfolio/mobile/image-228b.jpg'
import edelweissImage from '../../assets/images/portfolio/mobile/image-edelweiss.jpg'
import netcryImage from '../../assets/images/portfolio/mobile/image-netcry.jpg'
import hypersImage from '../../assets/images/portfolio/mobile/image-hypers.jpg'
import sxivImage from '../../assets/images/portfolio/mobile/image-sxiv.jpg'
import trinityImage from '../../assets/images/portfolio/mobile/image-trinity.jpg'
import paramourImage from '../../assets/images/portfolio/mobile/image-paramour.jpg'


import seraphTabletImage from '../../assets/images/portfolio/tablet/image-seraph.jpg'
import eeboxTabletImage from '../../assets/images/portfolio/tablet/image-eebox.jpg'
import federalTabletImage from '../../assets/images/portfolio/tablet/image-federal.jpg'
import delsolTabletImage from '../../assets/images/portfolio/tablet/image-del-sol.jpg'
import prototypeTabletImage from '../../assets/images/portfolio/tablet/image-prototype.jpg'
import towerTabletImage from '../../assets/images/portfolio/tablet/image-228b.jpg'
import edelweissTabletImage from '../../assets/images/portfolio/tablet/image-edelweiss.jpg'
import netcryTabletImage from '../../assets/images/portfolio/tablet/image-netcry.jpg'
import hypersTabletImage from '../../assets/images/portfolio/tablet/image-hypers.jpg'
import sxivTabletImage from '../../assets/images/portfolio/tablet/image-sxiv.jpg'
import trinityTabletImage from '../../assets/images/portfolio/tablet/image-trinity.jpg'
import paramourTabletImage from '../../assets/images/portfolio/tablet/image-paramour.jpg'


import seraphDesktopImage from '../../assets/images/portfolio/desktop/image-seraph.jpg'
import eeboxDesktopImage from '../../assets/images/portfolio/desktop/image-eebox.jpg'
import federalDesktopImage from '../../assets/images/portfolio/desktop/image-federal.jpg'
import delsolDesktopImage from '../../assets/images/portfolio/desktop/image-del-sol.jpg'
import prototypeDesktopImage from '../../assets/images/portfolio/desktop/image-prototype.jpg'
import towerDesktopImage from '../../assets/images/portfolio/desktop/image-228b.jpg'
import edelweissDesktopImage from '../../assets/images/portfolio/desktop/image-edelweiss.jpg'
import netcryDesktopImage from '../../assets/images/portfolio/desktop/image-netcry.jpg'
import hypersDesktopImage from '../../assets/images/portfolio/desktop/image-hypers.jpg'
import sxivDesktopImage from '../../assets/images/portfolio/desktop/image-sxiv.jpg'
import trinityDesktopImage from '../../assets/images/portfolio/desktop/image-trinity.jpg'
import paramourDesktopImage from '../../assets/images/portfolio/desktop/image-paramour.jpg'

const Portfolio = () => {
    const display = useDisplay();

    const list = useMemo(() => [
        {
            desktopImage: seraphDesktopImage,
            mobileImage: seraphImage,
            tabletImage: seraphTabletImage,
            title: 'Seraph Station',
            date: ''
        },
        {
            desktopImage: eeboxDesktopImage,
            mobileImage: eeboxImage,
            tabletImage: eeboxTabletImage,
            title: 'Eebox Building',
            date: ''
        },
        {
            desktopImage: federalDesktopImage,
            mobileImage: federalImage,
            tabletImage: federalTabletImage,
            title: 'Federal II Tower',
            date: ''
        },
        {
            desktopImage: delsolDesktopImage,
            mobileImage: delsolImage,
            tabletImage: delsolTabletImage,
            title: 'Project Del Sol',
            date: ''
        },
        {
            desktopImage: prototypeDesktopImage,
            mobileImage: prototypeImage,
            tabletImage: prototypeTabletImage,
            title: 'Le Prototype',
            date: ''
        },
        {
            desktopImage: towerDesktopImage,
            mobileImage: towerImage,
            tabletImage: towerTabletImage,
            title: '228B Tower',
            date: ''
        },
        {
            desktopImage: edelweissDesktopImage,
            mobileImage: edelweissImage,
            tabletImage: edelweissTabletImage,
            title: 'Grand Edelweiss Hotel',
            date: ''
        },
        {
            desktopImage: netcryDesktopImage,
            mobileImage: netcryImage,
            tabletImage: netcryTabletImage,
            title: 'Netcry Tower',
            date: ''
        },
        {
            desktopImage: hypersDesktopImage,
            mobileImage: hypersImage,
            tabletImage: hypersTabletImage,
            title: 'Hypers',
            date: ''
        },
        {
            desktopImage: sxivDesktopImage,
            mobileImage: sxivImage,
            tabletImage: sxivTabletImage,
            title: 'SXIV Tower',
            date: ''
        },
        {
            desktopImage: trinityDesktopImage,
            mobileImage: trinityImage,
            tabletImage: trinityTabletImage,
            title: 'Trinity Bank Tower',
            date: ''
        },
        {
            desktopImage: paramourDesktopImage,
            mobileImage: paramourImage,
            tabletImage: paramourTabletImage,
            title: 'Project Paramour',
            date: ''
        },
    ], []);

    const cardsContainer = useMemo(() => (
        list.map((item, index) => (
            <ImageCard 
                desktopImage={item.desktopImage}
                mobileImage={item.mobileImage}
                tabletImage={item.tabletImage}
                title={item.title}
                date={item.date}
            />
        ))
    ), [ list ]);

    return (
        <main className={classNames(display.px, display.pb3, display.pt3)}>
            <Hidden mdUp>
                <ImageList cols={1} gap={30} >
                    { cardsContainer }
                </ImageList>
            </Hidden>
            <Hidden mdDown>
                <ImageList cols={3} gap={30} >
                    { cardsContainer }
                </ImageList>
            </Hidden>
        </main>
    );
};

export default Portfolio;
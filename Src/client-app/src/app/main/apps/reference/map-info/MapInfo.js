import MapInfoHeader from './MapInfoHeader';
import MapInfoTable from './MapInfoTable';
import useThemeMediaQuery from 'src/BaseTemplate/hooks/useThemeMediaQuery';

function MapInfo(props) {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    return (
        <></>
      );
}

export default MapInfo;
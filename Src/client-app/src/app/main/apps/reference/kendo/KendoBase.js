import KendoHeader from './KendoHeader';
import Kendo from './Kendo';
import useThemeMediaQuery from 'src/BaseTemplate/hooks/useThemeMediaQuery';

function KendoBase(props) {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    return (
        <></>
      );
}

export default KendoBase;
import { makeStyles } from '@mui/styles';
import Backgorundbg from '../../../assets/images/Rectangle 13.png'

export const useStyles = makeStyles(theme => ({
    imgsetting: {
        marginLeft:"10px",
        marginRight:"10px",
    },
    bgimg:{
        backgroundImage: `url(${Backgorundbg})`,
        backgroundRepeat:"no-repeat",
        height:"100%",
    },
    Ellipse: {
        [theme.breakpoints.down('md')]: {
            height:"80px",
            width:"80px",
          },
    },
    ksi:{
        fontFamily:"GeneralSans-Semibold",
    },
    participate:{
        [theme.breakpoints.down('md')]: {
            padding:"10px 22px",
          },
    },
    descriptionptext:{
        [theme.breakpoints.down('md')]: {
            marginTop:"10px",
            marginBottom:"10px",
          },
    },
   
    
}));
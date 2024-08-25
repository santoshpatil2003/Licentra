import {React, useState, useEffect} from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import { Card, CardCover } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';

import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import BluetoothRoundedIcon from '@mui/icons-material/BluetoothRounded';
import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
import AdUnitsRoundedIcon from '@mui/icons-material/AdUnitsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import SpatialTrackingRoundedIcon from '@mui/icons-material/SpatialTrackingRounded';
import SettingsVoiceRoundedIcon from '@mui/icons-material/SettingsVoiceRounded';
import images from "./images.jpeg"
import { getBuyer } from '../Backend/Data';

// export default function BuyerData() {
//     return (
//         <AccordionGroup variant="plain" transition="0.2s"
//             sx={{
//                 maxWidth: 400,
//                 borderRadius: 'md',
//                 [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
//                 {
//                     paddingBlock: '1rem',
//                 },
//                 [`& .${accordionSummaryClasses.button}`]: {
//                     paddingBlock: '1rem',
//                 },
//             }}
//         >
//             <Accordion>
//                 <AccordionSummary>
//                     <Avatar color="primary">
//                         <TapAndPlayRoundedIcon />
//                     </Avatar>
//                     <ListItemContent>
//                         <Typography level="title-md">Connections</Typography>
//                         <Typography level="body-sm">
//                             Activate or deactivate your connections
//                         </Typography>
//                     </ListItemContent>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Stack spacing={1.5}>
//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <AirplanemodeActiveRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Airplane Mode</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <WifiRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Wi-Fi</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <BluetoothRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Bluetooth</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>
//                     </Stack>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion>
//                 <AccordionSummary>
//                     <Avatar color="success">
//                         <EditNotificationsRoundedIcon />
//                     </Avatar>
//                     <ListItemContent>
//                         <Typography level="title-md">Notifications</Typography>
//                         <Typography level="body-sm">
//                             Enable or disable your notifications
//                         </Typography>
//                     </ListItemContent>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Stack spacing={1.5}>
//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <EmailRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>E-mail</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <MessageRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Messages</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <AdUnitsRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Push</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>
//                     </Stack>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion>
//                 <AccordionSummary>
//                     <Avatar color="danger">
//                         <AccessibilityNewRoundedIcon />
//                     </Avatar>
//                     <ListItemContent>
//                         <Typography level="title-md">Accessibility</Typography>
//                         <Typography level="body-sm">
//                             Toggle your accessibility settings
//                         </Typography>
//                     </ListItemContent>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Stack spacing={1.5}>
//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <ZoomInRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Zoom</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <SpatialTrackingRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Audio Descriptions</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>

//                         <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                             <SettingsVoiceRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                             <FormLabel>Voice Control</FormLabel>
//                             <Switch size="sm" />
//                         </FormControl>
//                     </Stack>
//                 </AccordionDetails>
//             </Accordion>
//         </AccordionGroup>
//     );
// }








export default function BuyerData({data}) {
    let [BuyerName, BuyerNamef] = useState('')

    async function fet(){
        let d = (await getBuyer(data.buyer_id)).data
        BuyerNamef(d.name)
    }

    useEffect(()=>{
        fet()
    },[])
    return (
        <AccordionGroup variant="plain" transition="0.2s"
            sx={{
                maxWidth: '100%',
                borderRadius: 'md',
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                {
                    paddingBlock: '1rem',
                    '&:hover' : {backgroundColor: '#13121D', borderRadius: 'md'},
                },
                [`& .${accordionSummaryClasses.button}`]: {
                    paddingBlock: '1rem',
                    '&:hover' : {backgroundColor: '#13121D', borderRadius: 'md'},
                },
                // backgroundColor: 'white'
                '&:hover' : {backgroundColor: 'none', borderRadius: 'md'},
                padding: '1%',
                width: '100%',
                // height: '10.5%',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center'
            }}
            // '#111923'
        >
            <Accordion sx={{backgroundColor: '#13121D', borderRadius: 'md', width: '100%', height: '100%',}} >
                <AccordionSummary>
                    {/* <Avatar color="primary">
                        <TapAndPlayRoundedIcon />
                    </Avatar> */}
                    <Card sx={{width: '4%', height: '80%', padding: '1%'}}>
                        <CardCover>
                            <img src={data.song_pic_url} loading="lazy" alt=""/>
                        </CardCover>
                    </Card>
                    <ListItemContent>
                        <Typography level="title-md" sx={{color: 'white'}}>{data.song_name}</Typography>
                        <Typography level="body-sm">
                            {data.song_by}
                        </Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: '67%' }}>
                            {/* <AirplanemodeActiveRoundedIcon fontSize="xl2" sx={{ mx: 1 }} /> */}
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Buyer
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{BuyerName}</FormLabel>
                            {/* <Switch size="sm" /> */}
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '65%' }}>
                            {/* <AirplanemodeActiveRoundedIcon fontSize="xl2" sx={{ mx: 1 }} /> */}
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Buyer ID
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{data.buyer_id}</FormLabel>
                            {/* <Switch size="sm" /> */}
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '67.6%' }}>
                            {/* <WifiRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
                            <FormLabel sx={{color: 'white'}}>Wi-Fi</FormLabel>
                            <Switch size="sm" /> */}
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Date
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{data.date}</FormLabel>
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '68%' }}>
                            {/* <BluetoothRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
                            <FormLabel sx={{color: 'white'}}>Bluetooth</FormLabel>
                            <Switch size="sm" /> */}
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Cost
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{`${data.song_price}$`}</FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>

        </AccordionGroup>
    );
}









// export default function BuyerData() {
//     return (
//         <Accordion variant="plain" transition="0.4s"
//                     sx={{
//                         maxWidth: '100%',
//                         borderRadius: 'md',
//                         [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
//                         {
//                             paddingBlock: '1rem',
//                         },
//                         [`& .${accordionSummaryClasses.button}`]: {
//                             paddingBlock: '1rem',
//                         },
//                         backgroundColor: '#13121D'
//                     }}>
//             <AccordionSummary>
//                 <Avatar color="primary">
//                     <TapAndPlayRoundedIcon />
//                 </Avatar>
//                 <ListItemContent>
//                     <Typography level="title-md" sx={{color: 'white'}} >Connections</Typography>
//                     <Typography level="body-sm">
//                         Activate or deactivate your connections
//                     </Typography>
//                 </ListItemContent>
//             </AccordionSummary>
//             <AccordionDetails>
//                 <Stack spacing={1.5}>
//                     <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                         <AirplanemodeActiveRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                         <FormLabel>Airplane Mode</FormLabel>
//                         <Switch size="sm" />
//                     </FormControl>

//                     <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                         <WifiRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                         <FormLabel>Wi-Fi</FormLabel>
//                         <Switch size="sm" />
//                     </FormControl>

//                     <FormControl orientation="horizontal" sx={{ gap: 1 }}>
//                         <BluetoothRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
//                         <FormLabel>Bluetooth</FormLabel>
//                         <Switch size="sm" />
//                     </FormControl>
//                 </Stack>
//             </AccordionDetails>
//         </Accordion>
//     );
// }

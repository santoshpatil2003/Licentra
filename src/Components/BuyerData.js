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
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';
import { getBuyer } from '../Backend/Data';



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
                '&:hover' : {backgroundColor: 'none', borderRadius: 'md'},
                padding: '1%',
                width: '100%',
            }}
        >
            <Accordion sx={{backgroundColor: '#13121D', borderRadius: 'md', width: '100%', height: '100%',}} >
                <AccordionSummary>
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
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Buyer
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{BuyerName}</FormLabel>
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '65%' }}>
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Buyer ID
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{data.buyer_id}</FormLabel>
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '67.6%' }}>
                            <Typography paddingLeft={'0.5%'} level="body-sm">
                                Date
                            </Typography>
                            <FormLabel sx={{color: 'white'}}>{data.date}</FormLabel>
                        </FormControl>

                        <FormControl orientation="horizontal" sx={{ gap: '68%' }}>
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

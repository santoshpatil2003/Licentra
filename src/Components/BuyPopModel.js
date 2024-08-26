import * as React from 'react';
import { Box, Button, Modal, ModalDialog, FormLabel, CircularProgress } from '@mui/joy';
import SelectUse from './SelectUse';
import BuyMusicCard from './BuyMusicCard';
import RestrictionShow from './RestrictionShow';
import { TransactionSellerAndBuyer } from '../Backend/Data';

export default function BuyPopModel({ song_id ,b_uid, cost, pic, song_name,song_by ,restrictions, seller_id}) {
    const [open, setOpen] = React.useState(false);
    const [buy, buyf] = React.useState(false);
    const [use_case, use_casef] = React.useState('');



    function BuyMusic(){
        buyf(true);
        TransactionSellerAndBuyer(b_uid,seller_id,song_id,cost,use_case).then(()=>{
            buyf(false);
        })
    }






    return (
        <React.Fragment>
            <Button variant='solid' onClick={() => setOpen(true)} fullWidth>
                {`${cost}$`}
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog minWidth={'60vw'} sx={{ minHeight: '80vh', backgroundColor: '#070C12', border: 'none' }} >
                    <Box minHeight={'100%'} height={500} width={'100%'} display={'flex'} >
                        <Box height={'100%'} width={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
                            <BuyMusicCard button_desable={true} song_name={song_name} song_by={song_by} cost2={cost} pic={pic} ></BuyMusicCard>
                            <Box height={'39%'} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Box display={'flex'} justifyContent={'start'} alignItems={'center'} width={'100%'}>
                                    <FormLabel sx={{ color: 'white', marginLeft: '3%', marginBottom: '1%' }}>Restrictions</FormLabel>
                                </Box>
                                <Box bgcolor={'#111923'} height={'85%'} width={'90%'} borderRadius={10} padding={1}>
                                    <RestrictionShow text={restrictions}></RestrictionShow>
                                </Box>
                            </Box>
                        </Box>
                        <Box height={'100%'} width={'50%'} display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
                            <Box width={'100%'}>
                                <SelectUse use_case={use_case} use_casef={use_casef}></SelectUse>
                            </Box>
                            <Box width={'100%'}>
                                <Button onClick={()=>{BuyMusic()}} variant='solid' fullWidth>
                                    {buy?<CircularProgress></CircularProgress>: 'Own It'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}

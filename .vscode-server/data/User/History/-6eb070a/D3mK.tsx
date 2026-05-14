import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
    Box,
    Button,
    Flex,
} from "@chakra-ui/react";
import { getDocs, collection } from 'firebase/firestore';

const Staff = () => {
    // staffのデータを格納するuseState
    const [ staff, setStaff ] = useState<any>([]);

    // Firestoreからスタッフのデータを取得する処理
    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, 'staff'));
        const staffArray: any = [];
        querySnapshot.docs.map((doc)=>{
            staffArray.push({
                id: doc.id,
                name: doc.data().name,
            });
        });
        setStaff(staffArray);
    }

    // useEffectでgetDataを実行
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>
            <Box>
                <Flex>
                    <Box p={3} fontWeight={'bold'}>
                        名前
                    </Box>
                    <Box>
                    </Box>
                </Flex>
            </Box>
            {
                // map関数を使ってstaffのデータを表示
                staff.map((item: any)=>{
                    return (
                        <Box key={item.id}>
                            <Flex>
                                <Box p={3}>
                                    {item.name}
                                </Box>
                                <Box>
                                    <Button>シフト入力</Button>
                                </Box>
                            </Flex>
                        </Box>
                    )
                })
            }
        </div>
    );
}

export default Staff;

import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../utils/dateFormat';
import {BiBitcoin, BiCalendar, BiCreditCardFront, BiCircle, BiSolidTShirt, BiSolidComment, BiDollar, BiMoney, BiSolidTrash, BiTv, BiLogoYoutube} from 'react-icons/bi'
import {ImBooks, ImUsers} from 'react-icons/im'
import {MdFastfood, MdMedicalServices} from 'react-icons/md'
import {SiFreelancer} from 'react-icons/si'
import {BsFillPiggyBankFill} from 'react-icons/bs'
import {AiOutlineStock} from 'react-icons/ai'
import {RiTakeawayLine} from 'react-icons/ri'
import Button from './Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return <BiMoney />;
            case 'freelancing':
                return <SiFreelancer />
            case 'investments':
                return <AiOutlineStock />;
            case 'stocks':
                return <ImUsers />;
            case 'bitcoin':
                return <BiBitcoin />;
            case 'bank':
                return <BiCreditCardFront />;
            case 'youtube':
                return <BiLogoYoutube />;
            case 'other':
                return <BsFillPiggyBankFill />;
            default:
                return ''
        }
    }

    const spendCatIcon = () => {
        switch (category) {
            case 'education':
                return <ImBooks />;
            case 'groceries':
                return <MdFastfood />;
            case 'health':
                return <MdMedicalServices />;
            case 'subscriptions':
                return <BiTv />;
            case 'takeaways':
                return <RiTakeawayLine />;
            case 'clothing':
                return <BiSolidTShirt />;
            case 'travelling':
                return <SiFreelancer />;
            case 'other':
                return <BiCircle />;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'spend' ? spendCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{<BiDollar />} {amount}</p>
                        <p>{<BiCalendar />} {dateFormat(date)}</p>
                        <p>
                            {<BiSolidComment />}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={<BiSolidTrash />}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem
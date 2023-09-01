import { BsQuestionLg } from 'react-icons/bs'
import { FcAlarmClock } from 'react-icons/fc';
import { AiOutlineUser } from 'react-icons/ai';
import { formatTime } from '@/utils/commonMethods';
import Link from 'next/link';

interface Props {
    email?: string;
    isTiming?: Boolean;
    time?: number;
}

const Nav = ({ email, isTiming, time }: Props) => {
    return <div className='flex justify-between items-center p-4 sm:px-8 border-b border-b-gray-300'>
        <Link href={'/'}>
            <div className='flex items-center'>
                <div className='text-xl font-bold text-purple-950 text-center'>
                    <p>Quiz</p>
                    <p>Master</p>
                </div>
                <div className='text-3xl text-pink-900 font-bold animate-bounce'>
                    <BsQuestionLg />
                </div>
            </div>
        </Link>
        <div className='sm:flex items-center gap-4 text-xs sm:text-lg'>
            {
                isTiming && (
                    <div className='flex items-center gap-2'>
                        <FcAlarmClock />
                        <div className='bg-purple-700 text-white px-2 py-1 rounded-md'>{time && formatTime(time)}</div>
                    </div>
                )
            }
            {
                email && (
                    <div className='flex items-center gap-2'>
                        <AiOutlineUser />
                        <div className='text-pink-900'>{email}</div>
                    </div>
                )
            }
        </div>
    </div>
}

export default Nav;
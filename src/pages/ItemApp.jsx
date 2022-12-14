import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input } from '../cmps/Input'
import { MainWeatherDetails } from '../cmps/MainWeatherDetails'
import {
  getLocationAutoComplete,
  getWeather,
} from '../store/actions/weatherActions'

import { useEffectUpdate } from '../hooks/useEffectUpdate'

export const ItemApp = (props) => {
  const dispatch = useDispatch()

  const [cityTxt, setCityTxt] = useState('')

  const { locationsKeys } = useSelector((state) => state.weatherModule)
  const { currentWeathers } = useSelector((state) => state.weatherModule)
  const { autoCompleteWords } = useSelector((state) => state.weatherModule)
  const { fiveDaysDailyForcasts } = useSelector((state) => state.weatherModule)
  const { mainLocationKeyToShow } = useSelector((state) => state.weatherModule)

  const onLoadWeather = async (cityTxt) => {
    await dispatch(getWeather(cityTxt))
  }

  const loadAutocompelteWords = (txt) => {
    dispatch(getLocationAutoComplete(txt))
  }

  useEffect(() => {
    // onLoadWeather('tel aviv')
  }, [])

  useEffectUpdate(() => {
    // loadAutocompelteWords(cityTxt)
  }, [cityTxt])

  return (
    <section className="item-app">
      <Input
        autoCompleteWords={autoCompleteWords}
        setCityTxt={setCityTxt}
        cityTxt={cityTxt}
        onLoadWeather={onLoadWeather}
      />
      <MainWeatherDetails
        currentWeathers={currentWeathers}
        fiveDaysDailyForcasts={fiveDaysDailyForcasts}
        locationsKeys={locationsKeys}
        mainLocationKeyToShow={mainLocationKeyToShow}
      />
    </section>
  )
}

var words = [
  'Athens',
  'Ankara',
  'Alexandria',
  'Anqing',
  'Anyang',
  'Anshan',
  'Ahmedabad',
  'Algiers',
  'Addis Ababa',
  'Accra',
  'Beijing',
  'Bogota',
  'Berlin',
  'Baghdad',
  'Bangkok',
  'Bengaluru',
  'Busan',
  'Bengbu',
  'Bijie',
  'Bazhong',
  'Cairo',
  'Chongqing',
  'Changsha',
  'Changchun',
  'Chengdu',
  'Chennai',
  'Casablanca',
  'Cangzhou',
  'Changde',
  'Changzhou',
  'Dhaka',
  'Delhi',
  'Dongguan',
  'Dalian',
  'Deyang',
  'Dezhou',
  'Dali Prefecture',
  'Dazhou',
  'Datong',
  'Dakar',
  'Enshi Prefecture',
  'Edmonton',
  'Erbil',
  'Ezhou',
  'Ecatepec de Morelos',
  'Edinburgh',
  'Enugu',
  'Elazig',
  'Erzurum',
  'Eskisehir',
  'Fuzhou',
  'Fuyang',
  'Foshan',
  'Fuzhou',
  'Fukuoka-shi',
  'Fes',
  'Faridabad',
  'Fangshan District',
  'Fangcheng County',
  'Feng County',
  'Guangzhou',
  'Guiyang',
  'Giza',
  'Guigang',
  'Guilin',
  'Ganzhou',
  "Guang'an",
  'Guatemala City',
  'Glasgow',
  'Gaziantep',
  'Hong Kong',
  'Hanoi',
  'Hefei',
  'Harbin',
  'Hangzhou',
  'Ho Chi Minh City',
  'Handan',
  'Hengshui',
  'Hengyang',
  'Hanzhong',
  'Istanbul',
  'Isfahan',
  'Incheon',
  'Ibadan',
  'Izmir',
  'Ili Prefecture',
  'Indore',
  'Iztapalapa',
  'Islamabad',
  'Iasi',
  'Jakarta',
  'Jinan',
  'Jaipur',
  'Johannesburg',
  'Jiangmen',
  'Jieyang',
  'Jiaozuo',
  'Jingzhou',
  'Jiaxing',
  'Jinhua',
  'Kinshasa',
  'Kunming',
  'Kolkata',
  'Karachi',
  'Kaifeng',
  'Kashgar Prefecture',
  'Kabul',
  'Kuala Lumpur',
  'Khartoum',
  'Kampala',
  'London',
  'Lima',
  'Lanzhou',
  'Lahore',
  'Langfang',
  'Loudi',
  'Leshan',
  'Liaocheng',
  'Linyi',
  'Linfen',
  'Madrid',
  'Mexico City',
  'Moscow',
  'Melbourne',
  'Mumbai',
  'Maoming',
  'Meizhou',
  'Mianyang',
  'Managua',
  'Manila',
  'Nanning',
  'Nanjing',
  'Nanchang',
  'Nanyang',
  'Neijiang',
  'Ningbo',
  'New Territories',
  'Nantong',
  'Nanchong',
  'New York',
  'Ouagadougou',
  'Ottawa',
  'Osaka-shi',
  'Omsk',
  'Odesa',
  'Ordos',
  'Ouhai District',
  'Ogbomosho',
  'Omdurman',
  'Oslo',
  'Pyongyang',
  'Puyang',
  'Pingdingshan',
  'Pudong New District',
  'Pune',
  'Prague',
  'Paris',
  'Port-au-prince',
  'Phnom Penh',
  'Pretoria',
  'Quanzhou',
  'Qingyuan',
  'Qinzhou',
  'Qiqihar',
  'Qingdao',
  'Qujing',
  'Qiandongnan Prefecture',
  'Qiannan Prefecture',
  'Quito',
  'Qom',
  'Riyadh',
  'Rio de Janeiro',
  'Rome',
  'Rabat',
  'Recife',
  'Raipur',
  'Ranchi',
  'Rostov-on-Don',
  'Rugao',
  'Renshou County',
  'Santiago',
  'Seoul',
  'Singapore',
  'Sydney',
  'Shijiazhuang',
  'Shenyang',
  'Shanghai',
  'Saint Petersburg',
  'Shantou',
  'Shaoxing',
  'Tokyo',
  'Taiyuan',
  'Tianjin',
  'Tongren',
  'Tangshan',
  'Taizhou',
  'Tongliao',
  "Tai'an",
  'Tianshui',
  'Taizhou',
  'Tokyo',
  'Taiyuan',
  'Tianjin',
  'Tongren',
  'Tangshan',
  'Taizhou',
  'Tongliao',
  "Tai'an",
  'Tianshui',
  'Taizhou',
]

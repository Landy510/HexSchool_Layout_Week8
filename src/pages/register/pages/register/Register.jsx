import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@/components/checkbox/Checkbox";
import Modal from "@/components/modal/Modal";

import point_scanImg from '@/assets/images/point_scan.png';

const Register = () => {
  const checkRef = useRef(null);
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input 
          type="text" 
          placeholder='姓名' 
          className='w-full mb-3'
        />
        <input type="email" placeholder='EMAIL' className='w-full mb-3' />
        <input type="password" placeholder='密碼' className='w-full mb-3' />
        <Checkbox ref={checkRef}>
          <p className="text-white ml-1">
            我已經詳細閱讀
            <span 
              className="underline hover:cursor-pointer"
              onClick={() => setIsShowModal(true)}
            >相關條例</span>
          </p>
        </Checkbox>
        <button 
          type='submit'
          className='flex text-white justify-center items-center py-2 bg-primary-200 w-full rounded-[0.25rem] mt-6'
        >
          <img 
            src={point_scanImg} 
            alt="" 
            className='w-[18px] h-[18px] mr-2'
          />
          建立帳號
        </button>
      </form>
      <p className="text-white text-right mt-2">
        已有帳號嗎？前往<Link to={'/user/login'} className="underline">登入</Link>
      </p>

      <Modal 
        show={isShowModal} 
        onClose={active => setIsShowModal(active)} 
      >
        <p className="mb-3">ALPHABOX+ 註冊條例</p>
        <p className="mb-3">感謝您選擇使用ALPHABOX+品牌的Felix 3D立體投影機器人！為了確保您在使用我們的產品和服務時能夠享受到愉快的體驗，請在註冊帳號前，仔細閱讀以下註冊帳號使用規範條例。</p>
        <ol>
          <li className="mb-3">
            <p className="mb-3">第1條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第2條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第3條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第4條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第5條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第6條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
          <li className="mb-3">
            <p className="mb-3">第7條：帳號註冊</p>
            <ol>
              <li className="mb-3">
                1. 註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。
              </li>
              <li className="mb-3">
                2. 用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。
              </li>
              <li className="mb-3">
                3. 每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。
              </li>
            </ol>
          </li>
        </ol>
      </Modal>
    </div>
  )
}

export default Register;
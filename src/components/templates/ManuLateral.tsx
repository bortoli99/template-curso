import useAuth from "../../data/hook/UseAuth";
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuLateralProps {

}

export default function MenuLateral(props: MenuLateralProps) {
    
    const { logout } = useAuth()

    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
            <div className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={HomeIcon} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={SettingsIcon} />
                <MenuItem url="/notificacao" texto="Notificação" icone={BellIcon} />
            </ul>
            <ul>
                <MenuItem
                    onClick={event => logout()}
                    texto="Sair"
                    icone={LogoutIcon}
                    className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white hover:text-white`} />
            </ul>
        </aside>
    )
}
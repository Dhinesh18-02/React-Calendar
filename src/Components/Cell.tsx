import clsx from 'clsx';

interface props extends React.PropsWithChildren{
    className?: string;
    isActive?: boolean;
}


const Cell: React.FC<props> = ({className,children,isActive = false}) => {
    return <div className={clsx("h-12 flex items-center justify-center", {" text-teal-800 bg-teal-50 border-teal-50": isActive},className)} >{children}</div>
}

export default Cell;
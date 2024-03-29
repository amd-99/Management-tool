import React, { useState } from 'react';
import { Modal, Button, Tooltip } from "antd"
import { useDispatch  , useSelector} from "react-redux";
import { DeleteUsers } from "../../../../../Core/Redux/Action/UserTableAction";


export default function DeleteUser(props) {
    const tabledata = useSelector((state) => state.usertable.tableData);
    const users = (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 7C10.525 7 12.5714 5.4332 12.5714 3.5C12.5714 1.5668 10.525 0 8 0C5.475 0 3.42857 1.5668 3.42857 3.5C3.42857 5.4332 5.475 7 8 7ZM11.2 7.875H10.6036C9.81071 8.15391 8.92857 8.3125 8 8.3125C7.07143 8.3125 6.19286 8.15391 5.39643 7.875H4.8C2.15 7.875 0 9.52109 0 11.55V12.6875C0 13.4121 0.767857 14 1.71429 14H14.2857C15.2321 14 16 13.4121 16 12.6875V11.55C16 9.52109 13.85 7.875 11.2 7.875Z" fill="#8FA8BA"/>
    </svg>)
    
    const dispatch = useDispatch("")
    const [visible, setVisible] = useState(false)

    const handleCancel = () => {
        setVisible(false);
    }

    const handleDelete = () => {
        dispatch(DeleteUsers(props.tokens))
        setVisible(false);

    }

    const showModal = () => {
        setVisible(true);
    }
    const deleteicon = (<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.64286 0.687504H6.96429L6.75446 0.285746C6.71002 0.199854 6.64155 0.127604 6.55677 0.0771237C6.47198 0.0266431 6.37425 -6.50539e-05 6.27455 3.76679e-06H3.72321C3.62375 -0.000364272 3.52618 0.0262443 3.4417 0.0767811C3.35721 0.127318 3.28923 0.199738 3.24554 0.285746L3.03571 0.687504H0.357143C0.262423 0.687504 0.171582 0.72372 0.104605 0.788186C0.0376275 0.852651 0 0.940085 0 1.03125L0 1.71875C0 1.80992 0.0376275 1.89736 0.104605 1.96182C0.171582 2.02629 0.262423 2.0625 0.357143 2.0625H9.64286C9.73758 2.0625 9.82842 2.02629 9.8954 1.96182C9.96237 1.89736 10 1.80992 10 1.71875V1.03125C10 0.940085 9.96237 0.852651 9.8954 0.788186C9.82842 0.72372 9.73758 0.687504 9.64286 0.687504ZM1.1875 10.0332C1.20453 10.295 1.32459 10.5407 1.52323 10.7204C1.72186 10.9 1.98415 11 2.2567 11H7.7433C8.01585 11 8.27814 10.9 8.47677 10.7204C8.67541 10.5407 8.79547 10.295 8.8125 10.0332L9.28571 2.75H0.714286L1.1875 10.0332Z" fill="#88CDFF" />
    </svg>)
    return (
        <>
        <Tooltip placement="topLeft" title="Delete">
        <span style={{cursor:'pointer'}} onClick={showModal}>
                {deleteicon}
            </span>
        </Tooltip>
           
            <Modal
                centered
                maskClosable={false}
                title="Basic Modal"
                visible={visible}
                onOk={handleDelete}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleDelete}>
                        Delete
            </Button>,
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Cancel
            </Button>]}>
                
                {tabledata.map((val, index) =>
            val.token === (props.tokens) ? (
              <span key={index}>
              <p>Are you sure to delete this User permently ?</p>
               <span > {users} &nbsp;{`${val.firstName} ${val.lastName}`}</span>
              </span>
            ) : null
          )}

            </Modal>
        </>
    )
}

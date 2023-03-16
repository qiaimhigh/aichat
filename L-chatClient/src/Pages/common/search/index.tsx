import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './index.module.less'
import { SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className={styles['search']}>
      <Form  name='search' className={styles['input-box']}>
        <Form.Item className={styles["search-box"]}>
          <Input placeholder='搜索' style={{width: '100%'}} prefix={<SearchOutlined className="site-form-item-icon" />}/>
        </Form.Item>
      </Form>
      <div className={styles['add']} title="创建群聊">
        <Button icon={<UsergroupAddOutlined />} className={styles["btn"]} onClick={()=>{}}></Button>
      </div>
    </div>
  )
}

export default Index
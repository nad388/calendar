import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label='Event description'
        name='description'
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Event date'
        name='description'
        rules={[rules.required()]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label='Event name'
        name='description'
        rules={[rules.required()]}
      >
        <Select>
          <Select.Option value='jack'>Jack</Select.Option>
          <Select.Option value='lucy'>Lucy</Select.Option>
          <Select.Option value='disabled' disabled>
            disabled
          </Select.Option>
        </Select>
      </Form.Item>
      <Row justify={'end'}>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;

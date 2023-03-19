import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

function FormUs() {
  return (
    <div className="w-full px-4 py-16 bg-white rounded-r-lg">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Services">
          <Select>
            <Select.Option value="Software Development">
              Software Development
            </Select.Option>
            <Select.Option value="Software Development">
              Software Development
            </Select.Option>
            <Select.Option value="Software Development">
              Software Development
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Message">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button className="md:ml-[100px]">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormUs;

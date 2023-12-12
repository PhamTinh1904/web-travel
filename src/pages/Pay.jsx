import { Col, Container, Row } from "reactstrap";
import { useForm } from "react-hook-form";

const Pay = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <h2 className="text-center border-b-[1px]">Thanh toán</h2>
      <Row>
        <Col lg="6">
          <form>
            <div className="">
              <label>Họ tên</label>
              <input
                className=" outline-none rounded-md p-3 border-gray-300 border-[1px] border-solid w-full"
                placeholder="Full Name"
                id="fullName"
                {...register("fullName", { required: true })}
              />
            </div>

            {errors.fullName && (
              <span className=" text-red-600">Vui lòng nhập họ tên</span>
            )}

            <input
              className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
              placeholder="Enter your phone"
              id="phone"
              {...register("phone", { required: true })}
            />
            <input
              id="guestChild"
              className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
              placeholder="Trẻ em > 6 tuổi"
              type="number"
              {...register("guestChild", { required: true })}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Pay;

import { Button, Steps, theme } from "antd";
import { useEffect, useState } from "react";
import StepsComponentForm from "./StepComponentForm";
import { getPricingByPdf1Pdf2 } from "../../Service/Pdf1Pdf2/Pdf1Pdf2Api";
import {
  PricingTemplateInterface,
  StepFieldMapType,
} from "../../Service/Pdf1Pdf2/Pdf1Pdf2Type";
import Pdf1AllDetailsModal from "./Pdf1AllDetailsModal";

type StepComponentType = {
  pdf1pdf2id: string;
  pdf1Id: string;
};
type stepsType = {
  status: "finish" | "wait";
  title:
    | "Hotel"
    | "Flight"
    | "Guide"
    | "Transport"
    | "Entrance"
    | "Permits"
    | "Meals"
    | "Extras";
};
const steps: stepsType[] = [
  {
    status: "wait",
    title: "Hotel",
  },
  {
    status: "wait",
    title: "Flight",
  },
  {
    status: "wait",
    title: "Guide",
  },
  {
    status: "wait",
    title: "Transport",
  },
  {
    status: "wait",
    title: "Entrance",
  },
  {
    status: "wait",
    title: "Permits",
  },
  {
    status: "wait",
    title: "Meals",
  },
  {
    status: "wait",
    title: "Extras",
  },
];
const StepsComponent = ({ pdf1pdf2id, pdf1Id }: StepComponentType) => {
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();
  const [stepDetails, setStepDetails] = useState<stepsType[]>(steps);
  const [refreshStep, setRefreshStep] = useState<any>(undefined);
  const [pricingModal, setPricingModal] = useState(false);
  const [paymentDetail, setPayementDetail] =
    useState<PricingTemplateInterface>();

  const formNames = [
    { title: "hotelName", amount: "hotelPrice" },
    { title: "flightName", amount: "flightPrice" },
    { title: "guideName", amount: "guidePrice" },
    { title: "transportName", amount: "transportPrice" },
    { title: "entranceName", amount: "entrancePrice" },
    { title: "permitName", amount: "permitPrice" },
    { title: "mealName", amount: "mealPrice" },
    { title: "extraName", amount: "extraPrice" },
  ];

  const onChange = (value: number) => {
    setCurrent(value);
    setRefreshStep(value);
    console.log(pdf1pdf2id);
  };

  useEffect(() => {
    getPricingByPdf1Pdf2(pdf1pdf2id).then((res) => {
      setPayementDetail(res.data);
      updateSteps(res.data);
    });
  }, [refreshStep]);

  const stepFieldMap: StepFieldMapType = {
    Hotel: "hotelPrice",
    Flight: "flightPrice",
    Guide: "guidePrice",
    Transport: "transportPrice",
    Entrance: "entrancePrice",
    Permits: "permitPrice",
    Meals: "mealPrice",
    Extras: "extraPrice",
  };

  const updateSteps = (apiData: PricingTemplateInterface) => {
    for (const step of steps) {
      const fieldName = stepFieldMap[step.title];
      if (fieldName !== undefined) {
        const price = apiData[fieldName];
        if (price === 0) {
          step.status = "wait";
        } else {
          step.status = "finish";
        }
      }
    }
    setStepDetails(steps);
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        size={"large"}
        style={{ float: "right", marginTop: "5px", marginBottom: "5px" }}
        onClick={() => {
          setPricingModal(true);
        }}
      >
        Pricing Details
      </Button>
      <Pdf1AllDetailsModal
        modelOpen={pricingModal}
        setModelOpen={setPricingModal}
        pdf1Id={pdf1Id}
      />
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={stepDetails}
      />
      <div style={contentStyle}>
        <StepsComponentForm
          data={paymentDetail}
          pdf1pdf2Id={pdf1pdf2id}
          pdf1Id={pdf1Id}
          priceInputName={formNames[current].amount}
          titleInputName={formNames[current].title}
        />
      </div>
    </>
  );
};

export default StepsComponent;

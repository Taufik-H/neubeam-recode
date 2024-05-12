import UISimpleAlert from "@/ui/alert/UiSimpleAlert";
import RoundedAlert from "@/ui/alert/rounded-alert";
import ButtonGroup from "@/ui/button/button-group";
import SimpleCard from "@/ui/card/simple-card";
import ButtonToggle from "@/ui/button/button-toggle";
import CardImageFull from "@/ui/card/card-image-full";
import SimpleForm from "@/ui/form/simple-form";
import FormIcon from "@/ui/form/form-icon";
import SimpleAvatar from "@/ui/avatar/simple-avatar";
import TextAreas from "@/ui/textareas/textareas";
import BreadcrumbSimple from "@/ui/breadcrumb/breadcrumb-simple";
import SimpleSelect from "@/ui/select/simple-select";


const components = [
  {
    link: "/alert",
    name: "Alert",
    style: [
      {
        name: "Simple alert",
        componentCode: <UISimpleAlert />,
      },
      {
        name: "Rounded alert",
        componentCode: <RoundedAlert />,
      },
    ],
  },
  {
    link: "/avatar",
    name: "Avatar",
    style: [
      {
        name: "Simple avatar",
        componentCode: <SimpleAvatar />,
      },
    ],
  },
  {
    link: "/button",
    name: "Button",
    style: [
      {
        name: "Button group",
        componentCode: <ButtonGroup />,
      },
      {
        name: "Button toggle",
        componentCode: <ButtonToggle />,
      },
    ],
  },
  {
    link: "/card",
    name: "Card",
    style: [
      {
        name: "Simple card",
        componentCode: <SimpleCard />,
      },
      {
        name: "Full image card",
        componentCode: <CardImageFull />,
      },
    ],
  },
  {
    link: "/form",
    name: "Form",
    style: [
      {
        name: "Simple form",
        componentCode: <SimpleForm />,
      },
      {
        name: "Form with icon",
        componentCode: <FormIcon />,
      },
    ],
  },
  {
    link: "/textareas",
    name: "Textareas",
    style: [
      {
        name: "Textareas with action & avatar",
        componentCode: <TextAreas />,
      },
    ],
  },
  {
    link: "/breadcrumb",
    name: "Breadcrumb",
    style: [
      {
        name: "Breadcrumb simple",
        componentCode: <BreadcrumbSimple />,
      },
    ],
  },
  {
    link: "/select",
    name: "Select",
    style: [
      {
        name: "Simple Select",
        componentCode: <SimpleSelect />,
      },
   
    ],
  },
];

export default components;

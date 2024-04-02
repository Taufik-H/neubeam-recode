## Neubeam

![Neubeam Preview](https://raw.githubusercontent.com/Taufik-H/neubeam/main/public/bg.png)

### Description

Neubeam is an open-source project components library designed for Tailwind CSS with a Neubrutalism or retro-inspired style. It aims to provide developers with ready-to-use UI components to enhance their web projects with a unique visual aesthetic.

### How to Contribute

Contributing to Neubeam is greatly appreciated! Here are some ways you can contribute:

1. **Report Bugs**: If you encounter any bugs or issues while using Neubeam, please open an issue on GitHub.
2. **Request Features**: If you have any ideas for new features or improvements, feel free to submit them as GitHub issues.

3. **Submit Pull Requests**: Contributions are welcome! If you have developed a new feature, fixed a bug, or improved existing code, submit a pull request with your changes.

 

4. **Add new Components**: Follow the steps bellow
- Clone this repo 
   ```bash
   git clone https://github.com/Taufik-H/neubeam.git
   ```
- Go to the Projects
   ```bash
   cd neubeam
   ```

- go to the `ui` folder and choose or create new folder component, then paste your ``your-component.tsx`` inside the folder that you choosen
  ```
  ui/
  ├── alert/
  │   └── SimpleAlert.tsx
  ├── button/
  │   
  ├── card/
  │   
  └── form/
  ```
 - import your component in `constant/component.tsx`

  ```tsx
//  constant/components.tsx

 const components = [
  {
    link: "/alert", //create new if you have the new one                      
    name: "Alert",
    style: [
      {
        name: "simple alert",
        componentCode: <UISimpleAlert />,
      },
      {
        name: "rounded alert",
        componentCode: <RoundedAlert />,
      },
    ],
  },
  {...}]
  ```
### Support Neubeam ❤️

If you find Neubeam useful and would like to support its development, consider sponsoring the project on GitHub.

<a href="https://www.buymeacoffee.com/opik" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 50px !important;width: 217px !important;" ></a>

---

Thank you for considering contributing to Neubeam! Your support is greatly appreciated 🤝.

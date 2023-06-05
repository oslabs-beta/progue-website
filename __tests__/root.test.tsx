import { render } from "@testing-library/react";
import Component from "../src/root";

describe("Component", () => {
  test("renders without errors", () => {
    render(<Component />);
    // No errors thrown during rendering
  });

  test("renders QwikCityProvider", () => {
    const { container } = render(<Component />);
    const providerElement = container.querySelector("QwikCityProvider");
    expect(providerElement).toBeInTheDocument();
  });

  test("renders meta charset=utf-8", () => {
    const { container } = render(<Component />);
    const metaElement = container.querySelector('meta[charset="utf-8"]');
    expect(metaElement).toBeInTheDocument();
  });

  test("renders link to manifest.json", () => {
    const { container } = render(<Component />);
    const linkElement = container.querySelector(
      'link[rel="manifest"][href="/manifest.json"]'
    );
    expect(linkElement).toBeInTheDocument();
  });

  test("renders RouterHead component", () => {
    const { container } = render(<Component />);
    const routerHeadComponent = container.querySelector("RouterHead");
    expect(routerHeadComponent).toBeInTheDocument();
  });

  test("renders body with lang=en", () => {
    const { container } = render(<Component />);
    const bodyElement = container.querySelector('body[lang="en"]');
    expect(bodyElement).toBeInTheDocument();
  });

  test("renders RouterOutlet component", () => {
    const { container } = render(<Component />);
    const routerOutletComponent = container.querySelector("RouterOutlet");
    expect(routerOutletComponent).toBeInTheDocument();
  });

  test("renders ServiceWorkerRegister component", () => {
    const { container } = render(<Component />);
    const serviceWorkerComponent = container.querySelector(
      "ServiceWorkerRegister"
    );
    expect(serviceWorkerComponent).toBeInTheDocument();
  });
});

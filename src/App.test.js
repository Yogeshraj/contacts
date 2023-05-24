import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import '@testing-library/jest-dom'

test('should first', () => { 
    render(<App />);
    const linkElement = screen.getByText(/Testing/i);
    expect(linkElement).toBeInTheDocument();
 })
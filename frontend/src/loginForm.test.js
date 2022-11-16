import React from 'react';
import { render, screen } from "@testing-library/react";
import Login from "./views/Login";


  test("login displays two blank fields", () => {
    render(<Login />)
    const linkElement = screen.getByLabelText(/email/i)
    expect(linkElement).toBeInTheDocument()
  })

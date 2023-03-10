import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}

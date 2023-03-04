import Head from "next/head";
import Image from "next/image";
import { createUseStyles } from "react-jss";

const COLUMN_MAX_WIDTH = "640px";

const useStyles = createUseStyles((theme: any) => ({
  main: {
    minHeight: "100vh",
    backgroundColor: theme.background,
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  header: {
    fontFamily: "Gill Sans,Gill Sans MT,Calibri,sans-serif",
    color: theme.primary,
  },
  crestContainer: {
    maxHeight: 111,
    objectFit: "contain",
  },
  crest: {
    position: "relative",
    height: 111,
    width: 'auto',
  },
  paragraph: {
    fontFamily:
      "Petrona, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Times, Source Serif Pro, serif",
    fontSize: 16,
  },
  centralColumn: {
    margin: "auto",
    maxWidth: COLUMN_MAX_WIDTH,
    padding: "48px 24px",
  },
}));

export default function Home() {
  const classes = useStyles();

  const imageHeight = 100;

  return (
    <>
      <Head>
        <title>Will Howard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <div className={classes.centralColumn}>
          <div className={classes.headerRow}>
            <h1 className={classes.header}>Will Howard</h1>
            <Image height={imageHeight} width={(138 / 111) * imageHeight} src="/crest.png" alt="I just wanted a crest" />
          </div>
          <p className={classes.paragraph}>
            I am a software engineer and effective altruist
          </p>
        </div>
      </main>
    </>
  );
}

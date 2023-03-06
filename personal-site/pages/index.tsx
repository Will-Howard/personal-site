import Head from "next/head";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import crestPic from "../public/crest.png";

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
    fontFamily: theme.headingFont,
    color: theme.primary,
    [theme.breakpoints.sm]: {
      fontSize: "1.7em",
      color: theme.primaryLight,
    },
  },
  crest: {
    marginRight: 17,
    height: 90,
    width: "auto",

    [theme.breakpoints.sm]: {
      height: 60,
      marginRight: 6,
    },
  },
  paragraph: {
    fontFamily: theme.bodyFont,
    fontSize: 16,
    "& a": {
      color: theme.primary,
      textDecoration: "none",
      [theme.breakpoints.sm]: {
        color: theme.primaryLight,
      },
    },
  },
  centralColumn: {
    margin: "auto",
    maxWidth: COLUMN_MAX_WIDTH,
    padding: "48px 24px",
    [theme.breakpoints.sm]: {
      padding: "36px 24px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Will Howard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@__Will_Howard__" />
        <meta name="twitter:title" content="Will Howard" />
        <meta name="twitter:image" content="https://whoward.me/crest.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <div className={classes.centralColumn}>
          <div className={classes.headerRow}>
            <h1 className={classes.header}>Will Howard</h1>
            <Image
              className={classes.crest}
              src={crestPic}
              alt="I just wanted a crest"
            />
          </div>
          <p className={classes.paragraph}>
            Software engineer and effective altruist. You can find me on{" "}
            <a href="https://github.com/Will-Howard">GitHub</a> and{" "}
            <a href="https://www.linkedin.com/in/will-howard-011650a9/">
              LinkedIn
            </a>
            , and also on the{" "}
            <a href="https://forum.effectivealtruism.org/users/will-howard-1">
              EA Forum
            </a>{" "}
            which is where I currently work.
          </p>
        </div>
      </main>
    </>
  );
}

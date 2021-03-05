// Core Components
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";

// Page Components
import { Text, Card, Link as Anchor, Grid, Divider } from "@geist-ui/react";
import Breadcrumbs from "components/Breadcrumbs";

// Helpers
import { wordSplit } from "core/utils";
// import { defaultMediaQuery } from "core/constants";
// const { xs, sm, md, lg, xl } = defaultMediaQuery;

export async function getStaticProps() {
  const { data: reti } = await directus.getItems("reti_territoriali");

  return {
    props: { reti },
  };
}

export default function Reti({ reti }) {
  return (
    <Page
      id="reti"
      metaTags={{
        title: "Reti | greeNEETwork",
        description:
          "Reti territoriali attive nella zona del Parco Metropolitano delle Colline di Napoli",
      }}
    >
      <Grid.Container justify="center">
        <Grid xs={22} sm={20} direction="column">
          <Breadcrumbs />
          <hgroup>
            <Text h1 style={{ lineHeight: 1.125 }}>
              Reti Territoriali
            </Text>
            <Text
              h5
              style={{
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Reti locali, nazionali e internazionali attive nel Parco
              Metropolitano delle Colline di Napoli
            </Text>
          </hgroup>

          <Divider y={3} />
          <Grid.Container gap={2}>
            {reti.map((rete) => (
              <Grid key={rete.slug} xs={24} sm={12} md={8} lg={6}>
                <Card>
                  <Link
                    href="reti/[slug]"
                    as={`reti/${rete.slug}`}
                    prefetch={false}
                  >
                    <Anchor
                      style={{ textAlign: "center", alignSelf: "center" }}
                    >
                      <Image
                        //@ts-ignore
                        style={{ objectFit: "contain" }}
                        src={`/img/reti/${rete.id}.webp`}
                        height="280"
                        width="280"
                      />
                    </Anchor>
                  </Link>

                  <Text h3 style={{ marginBottom: ".5rem" }}>
                    {rete.nome}
                  </Text>
                  {/* <span>Area geografica : {rete.area_geografica}</span> */}
                  <Text>{wordSplit(rete.descrizione, 15)}</Text>
                  {/* <a href={rete.sito_web} /> */}
                  <Card.Footer>
                    <Link
                      href="reti/[slug]"
                      as={`reti/${rete.slug}`}
                      prefetch={false}
                    >
                      <Anchor block>Scopri la rete</Anchor>
                    </Link>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page>
  );
}

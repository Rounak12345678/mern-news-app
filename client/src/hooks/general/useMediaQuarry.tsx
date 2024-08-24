import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsive = (): {
  isTabHorizontal: boolean;
  isTabVertical: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isBeyondDesktop: boolean;
} => {
  const isTabHorizontal = useMediaQuery(
    "(min-width:900px) and (max-width:1199px)",
    {
      defaultMatches: false
    }
  );
  const isTabVertical = useMediaQuery(
    "(min-width:600px) and (max-width:899px)",
    {
      defaultMatches: false
    }
  );
  const isMobile = useMediaQuery("(max-width:599px)", {
    defaultMatches: false
  });
  const isDesktop = useMediaQuery("(min-width:1200px) and (max-width:1919px)", {
    defaultMatches: true
  });
  const isBeyondDesktop = useMediaQuery("(min-width:1920px)", {
    defaultMatches: false
  });

  return {
    isTabHorizontal,
    isTabVertical,
    isMobile,
    isDesktop,
    isBeyondDesktop
  };
};

export default useResponsive;

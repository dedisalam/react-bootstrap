/* eslint-disable @typescript-eslint/no-var-requires */
const { GridBreakpoints, Spacers } = require("../Variables");

//
// Margin
//
const Margin = {};
Object.assign(Margin, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(Margin, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginTop = {};
Object.assign(MarginTop, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginTop, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginRight = {};
Object.assign(MarginRight, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginRight, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginBottom = {};
Object.assign(MarginBottom, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginBottom, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginLeft = {};
Object.assign(MarginLeft, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginLeft, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginHorizontal = {};
Object.assign(MarginHorizontal, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginHorizontal, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const MarginVertical = {};
Object.assign(MarginVertical, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(MarginVertical, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

//
// Padding
//
const Padding = {};
Object.assign(Padding, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(Padding, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingTop = {};
Object.assign(PaddingTop, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingTop, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingRight = {};
Object.assign(PaddingRight, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingRight, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingBottom = {};
Object.assign(PaddingBottom, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingBottom, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingLeft = {};
Object.assign(PaddingLeft, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingLeft, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingHorizontal = {};
Object.assign(PaddingHorizontal, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingHorizontal, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

const PaddingVertical = {};
Object.assign(PaddingVertical, {
  "": Spacers.map((s) => {
    return s;
  }).concat(
    Spacers.map((s) => {
      if (s !== "0") {
        return `n${s}`;
      }
      return `auto`;
    })
  ),
});
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(PaddingVertical, {
      [gb]: Spacers.map((s) => {
        return s;
      }).concat(
        Spacers.map((s) => {
          if (s !== "0") {
            return `n${s}`;
          }
          return `auto`;
        })
      ),
    });
  }
  return undefined;
});

module.exports = {
  Margin,
  MarginTop,
  MarginRight,
  MarginLeft,
  MarginBottom,
  MarginHorizontal,
  MarginVertical,
  Padding,
  PaddingTop,
  PaddingRight,
  PaddingLeft,
  PaddingBottom,
  PaddingHorizontal,
  PaddingVertical,
};

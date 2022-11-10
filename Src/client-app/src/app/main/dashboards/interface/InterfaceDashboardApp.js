import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import InterfaceDashboardAppHeader from './InterfaceDashboardAppHeader';
import { motion } from 'framer-motion';
import TileWidget from './widgets/TileWidget';

const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function InterfaceDashboardApp(props) {

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Root header={<InterfaceDashboardAppHeader />} content={
        <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-24 w-full min-w-0 p-24" variants={container} initial="hidden" animate="show">
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={1}>
                <TileWidget url={"/apps/interfaces/interface-execution"} icon={"material-twotone:bolt"} title={"Interface Execution"} description={"Interface Execution"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={2}>
                <TileWidget url={"/apps/interfaces/interface-execution-status"} icon={"material-twotone:query_stats"} title={"Interface Execution Status"} description={"Interface ExecutionStatus"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-24 w-full min-w-0 p-24" variants={container} initial="hidden" animate="show">
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={3}>
                <TileWidget url={"/apps/base/success-factors"} icon={"material-twotone:cloud_done"} title={"EMP SF"} description={"Employee Success Factors"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={4}>
                <TileWidget url={"/apps/base/employee-staging"} icon={"material-twotone:transform"} title={"EMP STG"} description={"Employee Staging Transformed Data"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={5}>
                <TileWidget url={"/apps/base/employee-staging-historic"} icon={"material-twotone:history"} title={"EMP STG HISTORIC"} description={"Employee Staging Transformed Data "} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-24 w-full min-w-0 p-24" variants={container} initial="hidden" animate="show">
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={6}>
                <TileWidget url={"/apps/reference/glc"} icon={"material-twotone:book"} title={"REF GLC"} description={"Provide description"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={7}>
                <TileWidget url={"/apps/reference/company"} icon={"material-twotone:business"} title={"REF Company"} description={"Provide description"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={8}>
                <TileWidget url={"/apps/reference/employee-rates"} icon={"material-twotone:money"} title={"REF EMP RATES"} description={"Provide description"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={9}>
                <TileWidget url={"/apps/reference/exchange-rates"} icon={"material-twotone:account_balance"} title={"REF EXCH RATES"} description={"Provide description"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
                <motion.div variants={item} className="min-w-full sm:min-w-224 min-h-100" key={10}>
                <TileWidget url={"/apps/reference/map-info"} icon={"material-twotone:map"} title={"REF MAP INFO"} description={"Provide description"} backgroundColor={"secondary.light"} color={"secondary.dark"} />
                </motion.div>
            </motion.div>
        </div>
      }
    />
  );
}

export default InterfaceDashboardApp;

import withReducer from 'app/store/withReducer';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple';
import { motion } from 'framer-motion';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import AnalyticsDashboardAppHeader from './AnalyticsDashboardAppHeader';
import UpstreamVsDownstreamWidgets from './widgets/UpstreamVsDownstreamWidgets';
import AverageTimeUpstreamWidget from './widgets/AverageTimeUpstreamWidget';
import AverageTimeDownstreamWidget from './widgets/AverageTimeDownstreamWidget';
import ErrorsWidget from './widgets/ErrorsWidget';

function AnalyticsDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  return (
    <PageSimple
      header={<AnalyticsDashboardAppHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              !_.isEmpty(widgets) && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                    <UpstreamVsDownstreamWidgets />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <AverageTimeUpstreamWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <AverageTimeDownstreamWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <ErrorsWidget />
                  </motion.div>

                  
                </motion.div>
              )
            );
          }, [widgets])}
        </>
      }
    />
  );
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);

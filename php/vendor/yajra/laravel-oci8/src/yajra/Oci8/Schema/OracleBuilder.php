<?php

namespace yajra\Oci8\Schema;

use Closure;
use Illuminate\Database\Connection;
use Illuminate\Database\Schema\Builder;

class OracleBuilder extends Builder
{

    public $helper;

    /**
     * @param Connection $connection
     */
    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
        $this->grammar = $connection->getSchemaGrammar();
        $this->helper = new OracleAutoIncrementHelper($connection);
    }

    /**
     * Create a new table on the schema.
     *
     * @param  string $table
     * @param  Closure $callback
     * @return \Illuminate\Database\Schema\Blueprint
     */
    public function create($table, Closure $callback)
    {
        $blueprint = $this->createBlueprint($table);

        $blueprint->create();

        $callback($blueprint);

        $this->build($blueprint);

        $this->helper->createAutoIncrementObjects($blueprint, $table);
    }

    /**
     * Drop a table from the schema.
     *
     * @param  string $table
     * @return \Illuminate\Database\Schema\Blueprint
     */
    public function drop($table)
    {
        $this->helper->dropAutoIncrementObjects($table);
        parent::drop($table);
    }

    /**
     * Indicate that the table should be dropped if it exists.
     *
     * @return \Illuminate\Support\Fluent
     */
    public function dropIfExists($table)
    {
        $this->helper->dropAutoIncrementObjects($table);
        parent::dropIfExists($table);
    }

    /**
     * Create a new command set with a Closure.
     *
     * @param  string $table
     * @param  Closure $callback
     * @return \Illuminate\Database\Schema\Blueprint
     */
    protected function createBlueprint($table, Closure $callback = null)
    {
        $blueprint = new OracleBlueprint($table, $callback);
        $blueprint->setTablePrefix($this->connection->getTablePrefix());

        return $blueprint;
    }

}
